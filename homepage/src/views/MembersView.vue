<template>
    <div class="members">
        <!-- Tabs navs -->
        <div class="members-bg"></div>
        <div class="members-tabs">
            <ul class="nav nav-tabs nav-justified mb-3" id="members1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link active" id="members1-tab1" href="#members1-tabs1" role="tab" aria-controls="members1-tabs1" aria-selected="true" style="color: black; font-weight: bold;">Professor</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link" id="members1-tab2" href="#members1-tabs2" role="tab" aria-controls="members1-tabs2" aria-selected="false" style="color: black; font-weight: bold;">Graduate</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link" id="members1-tab3" href="#members1-tabs3" role="tab" aria-controls="members1-tabs3" aria-selected="false" style="color: black; font-weight: bold;">Undergraduate</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link" id="members1-tab4" href="#members1-tabs4" role="tab" aria-controls="members1-tabs4" aria-selected="false" style="color: black; font-weight: bold;">Alumni</a>
                </li>
            </ul>
        </div>

        <!-- Tabs content -->
        <div class="tab-content" id="members1-content">
            <br>
            <!-- Tabs Professor -->
            <div class="tab-pane fade show active" id="members1-tabs1" role="tabpanel" aria-labelledby="members1-tab1">
                <div class="members-container container-fuild">
                    <div class="members-title">
                        <h2 class="member-title">Professor</h2>
                    </div>
                    <hr/>
                    <div class="members-name d-flex justify-content-start">
                        name
                    </div>
                </div>
            </div>
            <!-- Tabs Graduate -->
            <div class="tab-pane fade" id="members1-tabs2" role="tabpanel" aria-labelledby="members1-tab2">
                Tab2 Content
            </div>
            <!-- Tabs Undergraduate -->
            <div class="tab-pane fade" id="members1-tabs3" role="tabpanel" aria-labelledby="members1-tab3">
                Tab3 Content
            </div>
            <!-- Tabs Alumni -->
            <div class="tab-pane fade" id="members1-tabs4" role="tabpanel" aria-labelledby="members1-tab4">
                Tab4 Content
            </div>
        </div>
    </div>
</template>

<script>
import { Tab, initMDB } from 'mdb-ui-kit';
import member from '../assets/members.json';

export default {
  name: 'MembersView',
  data() {
    return {
        members: member
    }
  },
  mounted() {
    initMDB({ Tab });
  }
}
</script>

<style scoped>
@import url("../assets/css/members.css");
</style>