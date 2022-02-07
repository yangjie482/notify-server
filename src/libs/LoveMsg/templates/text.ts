/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data

  let text = '早安呀，我可爱的鱼崽崽~\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  
  if (['星期六', '星期日'].includes(week)) {
    text += `
懒虫还不起床🤣
嗯哼~，既然今天是${week}，就让你再睡会懒觉~下次可不能啦~😆\n`
  }
  else {
    text += `
起床起床起床！太阳晒屁股啦，再不起床饭都凉啦😝\n
今天可是${week}，上班要迟到了~\n`
  }

  // 添加笑话
  if (caiHongpi) {
    //     text += `
    // 彩虹屁：
    text += `
${caiHongpi.content}\n`
  }

  if (sayLove) {
    text += `
${sayLove.content}\n`
  }

  // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }

  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }

  // 添加一句一言
  if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  }

  // 每日英语
  if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }

  console.log('============',text);
  

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
