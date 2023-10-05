<script setup>
const props = defineProps({
  fields: {
    type: Object,
    required: true
  }
})

const pdfs = computed(() => {
  const files = props.fields.pdfs.split("\r\n")
    .map(lang => {
      const [language, file] = lang.split(',')
      return { language, file }
    })
  return files
})
</script>

<template>
  <div class="manifesto-languages p-site border-bottom">
    Download the Manifesto in
    <span
      v-for="pdf in pdfs"
      :key="pdf.file"
      class="language"
    >
      <a :href="pdf.file" target="_blank" rel="noopener" download>
        <span class="underline">{{ pdf.language }}</span><span class="comma">, </span>
      </a>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.language {
  a {
    color: var(--black);
    text-decoration: none;

    &:hover {
      color: var(--primary);
    }

    .underline {
      text-decoration: underline;
    }
  }

  &:last-child {
    .comma {
      display: none;
    }
  }
}
</style>