<template>
    <div class="members">
        <MDBTabs v-model="activeTabId3">
            <!-- Tabs navs -->
            <MDBTabNav justify tabsClasses="mb-3">
                <MDBTabItem tabId="members1" href="members1">Professor</MDBTabItem>
                <MDBTabItem tabId="members2" href="members2">Graduate</MDBTabItem>
                <MDBTabItem tabId="members3" href="members3">Undergraduate</MDBTabItem>
                <MDBTabItem tabId="members4" href="members4">Alumni</MDBTabItem>
            </MDBTabNav>
        </MDBTabs>
    </div>
</template>

<script>
import { MDBTabs, MDBTabNav, MDBTabContent, MDBTabItem, MDBTabPane } from 'mdb-ui-kit';
import { ref } from 'vue';

export default {
  name: 'MembersView',
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent, 
    MDBTabItem, 
    MDBTabPane
  },
  setup() {
    const activeTabId3 = ref('members1');

    return {
        activeTabId3
    }
  }
}
</script>