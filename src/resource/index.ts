import foo from "./foo.yml"
import bar from "./bar.yml"

export interface ResourceItem {
    title?: string
    body?: string
}

const resource = {
    foo,
    bar,
}
export default resource as Record<string, ResourceItem>
