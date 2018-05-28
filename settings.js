var settings = {
    version: 'b0.0.1',

    //外网访问
    outerRouter: {
    	'wechat':'http://i199527q33.imwork.net:8001',
        'homeApi':'http://i199527q33.imwork.net:38494',
    },
    //内网测试
    innerRouter: {
    	// 'wsmp/v1/Mobile*'
    	// 'wechat':'http://localhost:8001'//发布
    	'homeApi':'http://localhost:38494',//调试
    	'wechatApi':'http://localhost:53631'//调试
    },
    resources:{
    	'QYwechatRes':'/wechatApi/QYwechat/',


    	'userInfoRes':'/homeApi/userInfo/',
        'userDaoRes':'/homeApi/userDao/'
    }

}