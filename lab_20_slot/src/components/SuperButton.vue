<template>
    <div>
        <button type="button" class="btn btn-primary">
            <!-- <slot/> -->
            <slot>send</slot>
        </button>
    </div>
</template>

<script>
export default{
    name: 'SuperButton'
}
</script>