let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '+27844132352@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '+27844132352', 'Nurutomo', m)
  this.sendContact(m.chat, '+27630164057', 'Owner hitman Bot :)', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
