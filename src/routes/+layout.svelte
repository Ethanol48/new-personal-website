<script lang="ts">
	import '../app.css';
  import '@fortawesome/fontawesome-free/css/all.min.css'
  let { children } = $props();
</script>


<main class="max-w-[450px] w-screen h-screen flex flex-col gap-2 items-center mt-2 dark">
  {@render children()}
</main>
