import os from 'os'
import fs from 'fs'
import path from 'path'

const userHome = os.homedir()
const homeFiles = fs.readdirSync(userHome)

const dotFiles = homeFiles.filter((filename) => filename.startsWith('.'))

dotFiles.forEach((filename) => {
	const filePath = path.join(userHome, filename)
	const fileStats = fs.lstatSync(filePath)

	const isSymLink = fileStats.isSymbolicLink()
	console.log(filename, '->', isSymLink)
})
