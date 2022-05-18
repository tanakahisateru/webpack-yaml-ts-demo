import resource, {ResourceItem} from "./resource"

const show = (item: ResourceItem) => {
    console.log(item)

    const h = document.createElement('h2')
    h.innerText = item.title
    document.body.appendChild(h)

    const p = document.createElement('p')
    p.innerText = item.body
    document.body.appendChild(p)
}

show(resource.foo)
show(resource.bar)
