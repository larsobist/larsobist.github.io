import {ref} from 'vue';

export const selectedProject = ref<string | null>(null);
export const appearance = ref<string>('Light'); // Set the default value to 'Light'

export function setSelectedProject(project: string | null) {
    selectedProject.value = project;
}

export function setVisualAppearance(look: string) {
    appearance.value = look;
}
