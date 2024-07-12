<template>
    <div class="members">
        <!-- Tabs navs -->
        <div class="members-tabs">
            <ul class="nav nav-tabs nav-justified mb-3" id="members1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab class="nav-link active" id="members1-tab1" href="#members1-tabs1" role="tab" aria-controls="members1-tabs1" aria-selected="true">Professor</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab class="nav-link" id="members1-tab2" href="#members1-tabs2" role="tab" aria-controls="members1-tabs2" aria-selected="false">Graduate</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab class="nav-link" id="members1-tab3" href="#members1-tabs3" role="tab" aria-controls="members1-tabs3" aria-selected="false">Undergraduate</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Tab, initMDB } from 'mdb-ui-kit';

export default {
  name: 'MembersView',
  mounted() {
    initMDB({ Tab });
  }
}
</script>