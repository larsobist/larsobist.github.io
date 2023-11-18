import { ref } from 'vue';

export const selectedProject = ref<string | null>(null);

export function setSelectedProject(project: string | null) {
  selectedProject.value = project;
}
