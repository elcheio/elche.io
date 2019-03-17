<template>
    <div class="m-stage">
        <div class="m-stage__media">
            <slot name="media"/>
        </div>
        <div class="m-stage__text">
            <div class="m-stage__inner t-inner">
                <slot name="text"/>
            </div>
        </div>
    </div>
</template>
