export type TabOptionsConfig = {
    currentOption: CurrentOption;
    options: TabOptionsProperties[];
}

type TabOptionsProperties = {
    name: string;
    text: string;
    icon?: string;
}

type CurrentOption = {
    name: string;
    isPrevious: boolean;
}