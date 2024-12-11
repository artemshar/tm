<script lang="ts">

  let { className = "", onCreate } = $props();
  let taskTitle = $state("");
  
  const handleButtonAdd = async (event: MouseEvent) => {    
    if (taskTitle.trim()) {
      onCreate(taskTitle)
    }
  };
</script>

<div
  class={`flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm shadow-black max-w-[700px] ${className}`}
>
  <!-- Input Field -->
  <input
    type="text"
    placeholder="Enter a new task..."
    bind:value={taskTitle}
    class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
  />

  <!-- Add Button -->
  <button
    onclick={handleButtonAdd}
    class="px-4 py-2 bg-teal-400 text-white font-semibold rounded-lg hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
  >
    Add
  </button>
</div>
