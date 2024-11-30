const fs = require('fs')
const path = require('path')

function validateAbiFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    JSON.parse(content) // Validate JSON syntax
    return true
  } catch (err) {
    console.error(`Invalid ABI file ${filePath}:`, err.message)
    return false
  }
}

function validateAbis(directory) {
  const files = fs.readdirSync(directory)
  let valid = true
  
  files.forEach(file => {
    if (file.endsWith('.json')) {
      if (!validateAbiFile(path.join(directory, file))) {
        valid = false
      }
    }
  })
  
  return valid
}

// Add validation script to package.json scripts
const abiDir = path.join(__dirname, '../src/abis')
if (!validateAbis(abiDir)) {
  process.exit(1)
}