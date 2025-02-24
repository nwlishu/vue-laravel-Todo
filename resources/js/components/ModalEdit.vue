<template>
    <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
        <div class="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 class="mb-4 text-lg font-bold">Edit</h2>
            <slot></slot>
            <div class="flex gap-4">
                <button
                    class="px-4 py-2 mt-4 text-white rounded bg-[#0004]"
                    @click="$emit('close')"
                >
                    Cancel
                </button>
                <button
                    class="px-4 py-2 mt-4 text-white bg-red-500 rounded"
                    @click="$emit('close')"
                >
                    Edit
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
};
</script>
