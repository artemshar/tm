<script>
  export let title = "Task Title";
  export let description = "Task Description";
  export let duoDate = "13 of December 2024";
  export let status = "ACTIVE";
  export let priority = "MEDIUM";
</script>

<div class="task p-5 rounded-lg shadow-lg bg-white min-w-[350px] m-2">
  <div class="task__header flex justify-between border-b-2 border-gray-200 pb-2 mb-3">
    <div class="text-lg font-semibold">{title}</div>
    <div class="task__info text-right text-sm">
      <div class="capitalize text-gray-600">Status: {status.toLowerCase()}</div>
      <div class="capitalize text-gray-600">Priority: {priority.toLowerCase()}</div>
    </div>
  </div>

  <div class="text-gray-700 mb-2">{description}</div>
  <div class="text-gray-500 text-sm">Due Date: {duoDate}</div>
</div>
