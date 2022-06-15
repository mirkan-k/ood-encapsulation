//
const DiaryEntry = require('../src/diaryEntry.js')

class SecretDiary {
    constructor() {
        this.locked = true
        this.entries = []
    }

    lock() {
        this.locked = true
        return true
    }

    unlock() {
        this.locked = false
        return true
    }

    addEntryToDiary(date, entry) {
        if (this.locked === false) {
            const diaryEntry = new DiaryEntry(date, entry)
            this.entries.push(diaryEntry)
            return true
        }
        return 'error'
    }

    getAllEntryDates() {
        const allEntryDates = this.entries.map((entry) => entry.date)
        return allEntryDates
    }

    getEntryIndex(entryDate) {
        const index = this.getAllEntryDates().indexOf(entryDate)
        return index
    }

    getEntry(entryDate) {
        const entryIndex = this.getEntryIndex(entryDate)
    
        if (this.locked === false && 
            this.getAllEntryDates().includes(entryDate)) {
            const entry = { 
                date: this.entries[entryIndex].getDate(), 
                entry: this.entries[entryIndex].getEntryContent()
            }
            return entry
        }
        return 'error'
    }

    getAllEntries() {
        if (this.locked === false) {
            const allEntries = []
            const allEntryDatesArray = this.getAllEntryDates()

            for (const date of allEntryDatesArray) {
                allEntries.push(this.getEntry(date))
            }
            return allEntries
        }
        return 'error'
    }
}

const secretDiary = new SecretDiary()

console.log(secretDiary.unlock())
console.log(secretDiary.getAllEntries())
console.log(secretDiary.addEntryToDiary(1655314379, 'test'))
console.log(secretDiary.addEntryToDiary('2020/3/10', 'test'))
console.log(secretDiary.getAllEntries())
console.log(secretDiary.getEntry(1655314379))

module.exports = SecretDiary