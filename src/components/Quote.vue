<template>
    <div>
        <div class="title">
            <slot name="teste"></slot>
        </div>

        <div>
            <slot name="teste2"></slot>
        </div>

    </div>
</template>

<script>
    export default {
}

</script>
<style scoped >
div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

h2 {
    color: red;
}

title {
    font-size: 100px;
    font-style: italic;
}
</style>

