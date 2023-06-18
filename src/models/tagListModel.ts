const localStorageKeyName = 'tagList'

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    save: () => void
    create: (name: string) => 'success' | 'duplicated'//success表示成功,duplicated表示name重复
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {//读取
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]")
        return this.data
    },
    save() {//保存
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string) {
        const names=this.data.map(item=>item.name)
        if (names.indexOf(name) >= 0) {
            return 'duplicated'
        }
        this.data.push({id:name,name:name})
        this.save()
        return 'success'
    }
}
export default tagListModel;