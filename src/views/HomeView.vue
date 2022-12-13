<template>
  <b-container class="mt-4">
    <div class="locale-changer"></div>
    <b-row>
      <b-col>
        <RouterLink to="register">
          {{ $t("register") }}
        </RouterLink>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup></script>
