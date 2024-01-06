import {ref} from 'vue';

export const selectedProject = ref<string | null>(null);
export const apppearance = ref<string>('Light'); // Set the default value to 'Light'

export function setSelectedProject(project: string | null) {
    selectedProject.value = project;
}

export function setVisualAppearance(appearance: string) {
    apppearance.value = appearance;
}
