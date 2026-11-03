<template>
  <main id="main-content" tabindex="-1">
    <PwPageIntro crumb="Getting Started" eyebrow="GETTING STARTED">
      <template #title>Choose your next step.</template>
      New to PTERI Wallet or returning to an existing wallet? Start with what you need to do, then choose your platform.
    </PwPageIntro>

    <section class="container bottom-space">
      <div class="choice-tabs" role="tablist" aria-label="Wallet setup task" @keydown="onKey">
        <button
          v-for="t in taskTabs"
          :id="`task-${t.key}`"
          :key="t.key"
          type="button"
          role="tab"
          :aria-selected="t.key === task"
          :tabindex="t.key === task ? 0 : -1"
          aria-controls="setup-content"
          @click="select(t.key)"
        >{{ t.label }}</button>
      </div>
      <div id="setup-content" class="setup-panel" role="tabpanel" :aria-labelledby="`task-${task}`" aria-live="polite">
        <div>
          <span class="pill">{{ panel.pill }}</span>
          <h2 style="margin-top:18px">{{ panel.title }}</h2>
          <p>{{ panel.text }}</p>
          <PwButton :to="panel.url" primary>{{ panel.cta }}</PwButton>
          <p v-if="task === 'restore'"><a class="subtle-link" :href="links.importWallet">Ready to restore? Open web import</a></p>
          <p v-else><NuxtLink class="subtle-link" to="/#download">Prefer a mobile app?</NuxtLink></p>
        </div>
        <ul class="checklist">
          <li v-for="item in panel.list" :key="item[0]"><strong>{{ item[0] }}</strong><small>{{ item[1] }}</small></li>
        </ul>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">FIRST THINGS FIRST</div>
          <h2>Before you begin.</h2>
        </div>
        <p>Three useful checks, whatever your next step.</p>
      </div>
      <div class="path-grid">
        <div class="path"><span class="num">01</span><h3>Choose the right release.</h3><p>Check the official app listing or web-wallet requirements for your device.</p></div>
        <div class="path"><span class="num">02</span><h3>Know your recovery path.</h3><p>A password and a recovery phrase have different roles. Read the instructions for the release you use.</p></div>
        <div class="path"><span class="num">03</span><h3>Keep recovery material private.</h3><p>Use it only in the intended, official restoration flow. Never include it in a support request.</p></div>
      </div>
    </section>

    <section class="section container">
      <div class="banner">
        <div>
          <h2>You don’t need to figure it out alone.</h2>
          <p>Find task-based help without sharing your wallet secrets.</p>
        </div>
        <PwButton to="/help">Find wallet help</PwButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { links, setupContent, taskTabs, type TaskKey } from '~/data/wallet'

definePageMeta({ layout: 'wallet' })

usePwSeo(
  'Get Started | PTERI Wallet',
  'Choose a create, restore, or return path for PTERI Wallet and understand the platform and recovery checks before you begin.',
  '/get-started',
)

const route = useRoute()
const router = useRouter()
const task = ref<TaskKey>('create')
const panel = computed(() => setupContent[task.value])

const fromQuery = (): TaskKey => {
  const q = String(route.query.task || '')
  return (q in setupContent ? q : 'create') as TaskKey
}

// The selected task lives in ?task= so it survives refresh, deep links, and back/forward.
onMounted(() => { task.value = fromQuery() })
watch(() => route.query.task, () => { task.value = fromQuery() })

function select(key: TaskKey) {
  task.value = key
  router.push({ path: '/get-started', query: { task: key } })
}

function onKey(e: KeyboardEvent) {
  const keys = taskTabs.map(t => t.key)
  let i = keys.indexOf(task.value)
  if (e.key === 'ArrowRight') i = (i + 1) % keys.length
  else if (e.key === 'ArrowLeft') i = (i + keys.length - 1) % keys.length
  else if (e.key === 'Home') i = 0
  else if (e.key === 'End') i = keys.length - 1
  else return
  e.preventDefault()
  select(keys[i])
  nextTick(() => document.getElementById(`task-${keys[i]}`)?.focus())
}
</script>
