<template>
  <FileUpload
    ref="fileUploadRef"
    :showUploadButton="false"
    :showCancelButton="false"
    :showProgressBar="true"
    :multiple="true"
    :chooseButtonProps="{ rounded: true }"
    :auto="true"
    @select="onSelect"
    @removeUploadedFile="onRemove"
  >
    <template #empty>
      <div class="upload-placeholder">
        <p>Drag and drop files here or click to browse</p>
      </div>
    </template>
  </FileUpload>
</template>

<script>
import { FileUpload } from "primevue";

export default {
  name: "AppInputFile",
  components: {
    FileUpload,
  },
  props: {
    uploadedFiles: {
      type: Array,
      default: () => [],
    },
  },
  async mounted() {
    if (this.uploadedFiles && this.uploadedFiles.length > 0) {
      // convert objects to file blobs
      const files = await Promise.all(
        this.uploadedFiles.map((uploadedFile) =>
          new Promise(async(resolve) => {
            try {
              const existingFile = await fetch(uploadedFile.url).then((res) => res.blob());
              const file = new File(
                [existingFile],
                uploadedFile.name,
                {
                  type: existingFile.type,
                  lastModified: new Date().getTime(),
                }
              );
              Object.defineProperty(file, "objectURL", {
                value: existingFile.objectURL,
                writable: true,
              });
              resolve(file);
            } catch {
              resolve(null);
            };
          })
        )
      );

      // simulate file selection
      files.forEach((file) => {
        if (file) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);

          const event = new Event("change", { bubbles: true });
          Object.defineProperty(event, "target", {
            value: { files: dataTransfer.files },
          });
          if (this.$refs.fileUploadRef) {
            this.$refs.fileUploadRef.onFileSelect(event);
          }
        }
      });
    }
  },
  methods: {
    onSelect(event) {
      this.$emit("update:files", event.files);
    },
    onRemove(event) {
      this.$emit("file-removed", event.file);
    },
    onProgress(event) {
      this.$emit("upload-progress", event.progress);
    },
  },
};
</script>
