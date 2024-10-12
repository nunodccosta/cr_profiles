<template>
  <div>
    <form @submit.prevent="submitData">
      <input
        v-model="player_tag"
        @input="capitalizeInput"
        type="string"
        placeholder="Search Player Tag"
      />
      <button type="submit">Submit</button>
    </form>

    <p style="text-wrap: wrap">
      Player:
      <template v-if="player.value">
        {{ player.value.name }}
      </template>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const player: any = ref({});
    const player_tag = ref("20YGY2LYJ");
    const loading = ref(false);
    const error = ref(null);

    const capitalizeInput = () => {
      player_tag.value = player_tag.value.toUpperCase();
    };

    const submitData = async () => {
      loading.value = true;
      error.value = null;

      try {
        const response = await useFetch(`/api/player/%23${player_tag.value}`);
        player.value = response.data;
      } catch (err: any) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return { player, player_tag, loading, error, capitalizeInput, submitData };
  },
};
</script>

<style lang=""></style>
