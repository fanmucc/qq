const express = require('express')
const request = require('request-promise')
const app = express()
app.get('/',async (req , res) => {
    const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=389536626&uin=821618356&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E6%9D%8E%E8%8D%A3%E6%B5%A9&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=${+ new Data()}`
    try {
        res.json(await request({
            uri: url,
            json: true,
            headers: {
                'authority': 'c.y.qq.com',
                'referer': 'https://y.qq.com/m/index.html',
                'origin': 'https://y.qq.com',
                'accept': 'application/json',
                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',

            }
        }))
    } catch(e) {
        res.json({error: e.message})
    }
    





})
app.listen(4000)
//'origin: https://y.qq.com'


//curl 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=389536626&uin=821618356&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E6%9D%8E%E8%8D%A3%E6%B5%A9&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1535547436043' -H 'origin: https://y.qq.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: zh-CN,zh;q=0.9' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' -H 'accept: application/json' -H  -H  -H 'cookie: yqq_stat=0; pgv_info=ssid=s3083399119; pgv_pvid=6751646028; ts_uid=2108449623; pgv_pvi=72543232; pgv_si=s8893530112; qqmusic_fromtag=10; ts_uid=2108449623; ptisp=cnc; ptui_loginuin=821618356; pt2gguin=o0821618356; uin=o0821618356; skey=@z0JVWH5BM; RK=hAS4vA/AYK; ptcz=aaa6e5bc3620051c1f9a786a27d81e5c2b020f89fce2ac5e62548149256e6d4f; luin=o0821618356; lskey=0001000095d183fc217c0220b23e3459692607b2897e07d858735cff374ab734a53dfb5bc7fb79ac193ed755; p_uin=o0821618356; pt4_token=Fk2RqsbG3rRQA2Gh86-pP9sHSuwKO1zDGiJ7TefBsvE_; p_skey=9LawP7ErxnsJjLg15PIrf3XU1RV91N5p7yRyZe3yb78_; p_luin=o0821618356; p_lskey=00040000ae1ed390b80b08a17a792997a882c6702002e7a5078fccf7a0554ea18cc2b253315cb68267af3a2a; checkmask=3; ts_refer=ADTAGmyqq; ts_last=y.qq.com/m/index.html' --compressedcurl 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=389536626&uin=821618356&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E6%9D%8E%E8%8D%A3%E6%B5%A9&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1535547436043' -H  -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: zh-CN,zh;q=0.9' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' -H 'accept: application/json' -H 'referer: https://y.qq.com/m/index.html' -H 'authority: c.y.qq.com' -H 'cookie: yqq_stat=0; pgv_info=ssid=s3083399119; pgv_pvid=6751646028; ts_uid=2108449623; pgv_pvi=72543232; pgv_si=s8893530112; qqmusic_fromtag=10; ts_uid=2108449623; ptisp=cnc; ptui_loginuin=821618356; pt2gguin=o0821618356; uin=o0821618356; skey=@z0JVWH5BM; RK=hAS4vA/AYK; ptcz=aaa6e5bc3620051c1f9a786a27d81e5c2b020f89fce2ac5e62548149256e6d4f; luin=o0821618356; lskey=0001000095d183fc217c0220b23e3459692607b2897e07d858735cff374ab734a53dfb5bc7fb79ac193ed755; p_uin=o0821618356; pt4_token=Fk2RqsbG3rRQA2Gh86-pP9sHSuwKO1zDGiJ7TefBsvE_; p_skey=9LawP7ErxnsJjLg15PIrf3XU1RV91N5p7yRyZe3yb78_; p_luin=o0821618356; p_lskey=00040000ae1ed390b80b08a17a792997a882c6702002e7a5078fccf7a0554ea18cc2b253315cb68267af3a2a; checkmask=3; ts_refer=ADTAGmyqq; ts_last=y.qq.com/m/index.html' --compressed

