let config = {
    "dev": {
        BASE_HOST: 'http://api.ilovelook.cn',
        BASE_SHOP_HOST: 'http://shopapi.ilovelook.cn',
        REDIS_HOST: '8106dcab78d542dc.m.cnbja.kvstore.aliyuncs.com',
        REDIS_PASSWD: 'X605goods',
        REDIS_PREFIX: 'm:',
        PORTS: 80
    },
    "test": {
        BASE_HOST: 'http://api.ilovelook.cn',
        BASE_SHOP_HOST: 'http://shopapi.ilovelook.cn',
        REDIS_HOST: '8106dcab78d542dc.m.cnbja.kvstore.aliyuncs.com',
        REDIS_PASSWD: 'X605goods',
        REDIS_PREFIX: 'm:',
        PORTS: 5000
    },
    "production": {
        BASE_HOST: 'http://api.internal.ilovelook.cn',
        BASE_SHOP_HOST: 'http://shopapi.internal.ilovelook.cn',
        REDIS_HOST: '7f381687be0a4cdb.m.cnbja.kvstore.aliyuncs.com',
        REDIS_PASSWD: 'X605goods',
        REDIS_PREFIX: 'm:',
        PORTS: 6000
    },
    apiAddress: {

    }
};
export default config;