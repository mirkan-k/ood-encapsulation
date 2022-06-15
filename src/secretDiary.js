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

    getEntries() {
        if (this.locked === false) {
            return this.entries
        }
        return 'error'
    }
}

const secretDiary = new SecretDiary()

console.log(secretDiary.unlock())
console.log(secretDiary.getEntries())
console.log(secretDiary.addEntryToDiary('2', 'test'))
console.log(secretDiary.getEntries())

module.exports = SecretDiary