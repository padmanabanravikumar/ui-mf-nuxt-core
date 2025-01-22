<template>
  <div class="container">
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/components">Components Example</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/users">Users</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/users/new">New User</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
