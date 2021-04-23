<template>
<div class="indexAccount">
  <PersonalData />
  <CollapseMenu />
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import PersonalData from '@/components/account/index/components/PersonalData';
// eslint-disable-next-line import/extensions
import CollapseMenu from '@/components/account/index/components/CollapseMenu';

export default {
  name: 'Index',
  data() {
    return {
    };
  },
  components: {
    PersonalData,
    CollapseMenu,
  },
};
</script>

<style lang="scss">

</style>
