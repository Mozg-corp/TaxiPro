<template>
<div class="indexAccount">
  <PersonalData />
  <Agregators />
  <CollapseMenu />
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import PersonalData from '@/components/account/index/components/PersonalData';
// eslint-disable-next-line import/extensions
import CollapseMenu from '@/components/account/index/components/CollapseMenu';
// eslint-disable-next-line import/extensions
import Agregators from '@/components/account/index/components/Agregators';

export default {
  name: 'Index',
  data() {
    return {
    };
  },
  components: {
    PersonalData,
    CollapseMenu,
    Agregators,
  },
};
</script>

<style lang="scss">

</style>
