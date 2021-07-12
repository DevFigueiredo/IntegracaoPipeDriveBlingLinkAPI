import mongoose from 'mongoose'

class Database {
  public connect (url: string): void {
    try {
      mongoose.connect(url, {
        useNewUrlParser: true
      })
    } catch (error) {
      console.log(error)

      // console.log('Erro ao comunicar-se a base de dados')
    }
  }
}

export default new Database()
