//
class DiaryEntry {
    constructor(date, entry) {
        this.date = date
        this.entryContent = entry
    }

    getDate() {
        return this.convertDate(this.date)
    }

    convertDate(timestamp) {
        if (!isNaN(timestamp)) {
            const date = new Date(timestamp * 1000)
            const timeStampConverted = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    
            return timeStampConverted;
        }
        return this.date
    }

    getEntryContent() {
        return this.entryContent
    }
}

const entry = new DiaryEntry()
entry.date = '2022/6/15'

console.log(entry.convertDate(1655314136))

module.exports = DiaryEntry