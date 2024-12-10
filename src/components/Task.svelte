<script lang="ts">
  import type { StatusType, PriorityType } from "../types/tasks";

  export let title = "Task Title";
  export let description = "";
  export let duoDate = "";
  export let status: StatusType = "ACTIVE";
  export let priority: PriorityType = "MEDIUM";

  const renderPriority = priority.toLowerCase();
  const renderStatus = status.toLowerCase();
</script>

<div class="p-3 rounded-lg shadow-sm shadow-black bg-white max-w-[700px] relative w-full z-10">
  <div class="text-lg font-semibold">{title}</div>
  <div class="text-gray-700 mb-2">{description}</div>


  <div class="flex justify-between border-t-2 border-gray-100 pb-1 pt-1 mb-3 gap-2 relative mt-6">
    <div class="text-gray-500 text-sm">Due Date: {duoDate}</div>

    <div class="text-right text-xs items-end">
      <div class="capitalize text-gray-600">Priority: <span class={`${renderPriority}`}>{renderPriority}</span></div>
      <div class="capitalize text-gray-600">Status: <span class={`${renderStatus}`}>{renderStatus}</span></div>
    </div>
  </div>


</div>

<style>
  /* colors to highlight a status */
  .active {
    color: green;
  }
  .completed {
    font-weight: 600;
  }
  
  /* colors to highlight a priority */
  .high {
    color: rgb(168, 20, 20);
  }
  .medium {
    color: rgb(189, 126, 43);
  }
  .low {
    color: rgb(50, 135, 205);
  }
</style>