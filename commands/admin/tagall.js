exports.run = {
   usage: ['tagall', 'everyone'],
   async: async (m, {
      client,
      text,
      participants
   }) => {
      try {
         let member = participants.map(v => v.id)
         let message = (!text) ? 'Hello member ' + await (await client.groupMetadata(m.chat)).subject + ' group.' : text
         client.sendMessageModify(m.chat, `*${message}*\n${readmore}\n${member.map(v => '	◉  @' + v.replace(/@.+/, '')).join('\n')}`, m, {
            title: '📢 Pemberitahuan all member',
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/8767ff5f2252dafbf317b.jpg')
            url: 'https://chat.whatsapp.com/CmJkktfVp0H2Gl4v11VOLW'
            })
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   admin: true,
   group: true
}

let readmore = String.fromCharCode(8206).repeat(4001)
