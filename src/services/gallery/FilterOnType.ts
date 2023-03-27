export const filterToType = (filter: string): string => {
    if (filter === 'default') {
        return "bande-demo";
    } else if (filter === 'select2') {
        return "self-tape";
    } else {
        return "";
    }
}