// pages/goods/index.js
Page({
  data:{
    showPlaneType: '',  // 筛选面板 ‘’不展开 0排序 1拥有 2筛选
    filter:{
      // 排序筛选
      sort: {
        currentIdx: 0,
        list: [
          {
            name: '默认排序',
            id: 0
          },{
            name: '定量从高到低',
            id: 1
          },{
            name: '定量从低到高',
            id: 2
          },{
            name: '价格从高到低',
            id: 3
          },{
            name: '价格从低到高',
            id: 4
          }
        ]
      },
      // 是否拥有筛选
      has: {
        currentIdx: 0,
        list: [
          {
            name: '所有',
            id: 0
          },{
            name: '已定',
            id: 1
          },{
            name: '未定',
            id: 2
          }
        ]
      },
      // 筛选
      ft: {
        list: [
          {
            title: '波段',
            opts: [
              {
                name: '所有',
                id: 0
              }
            ]
          },
          {
            title: '商品',
            opts: [
              {
                name: '必定款',
                id: 0
              },{
                name: '特价款',
                id: 1
              }
            ]
          },
          {
            title: '价格区间（元）',
            opts: [
              {
                name: '所有',
                id: 0
              }
            ]
          },
          {
            title: '女装',
            opts: [
              {
                name: 'T恤',
                id: 0
              },{
                name: '针织衫',
                id: 1
              }
            ]
          }
        ]
      }
    },
    goodsListType: 1, //1小图 2大图
    goodsList: [
      {
        id: 0,
        pic: '../../images/local/pic2.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        no: 1630188,
        price: 999,
        dn: 260
      },{
        id: 0,
        pic: '../../images/local/pic2.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        no: 1630188,
        price: 999,
        dn: 260
      },{
        id: 0,
        pic: '../../images/local/pic2.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        no: 1630188,
        price: 999,
        dn: 260
      },{
        id: 0,
        pic: '../../images/local/pic2.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        no: 1630188,
        price: 999,
        dn: 260
      }
    ],
    isShowList: false,  //是否展示陈列
    // 陈列列表
    showList: [
      {
        id: 0,
        pic: '../../images/local/pic1.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        dn: 260
      },{
        id: 0,
        pic: '../../images/local/pic1.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        dn: 260
      },{
        id: 0,
        pic: '../../images/local/pic1.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        dn: 260
      },{
        id: 0,
        pic: '../../images/local/pic1.png',
        name: '百搭针织上衣 针织毛衣上 衣针织衫',
        dn: 260
      }
    ]
  },
  showPlane: function(e){
    // 筛选面板开关
    let index = e.currentTarget.dataset.idx,
      showPlaneType = this.data.showPlaneType;

    if(index == showPlaneType){
      showPlaneType = '';
    }else{
      showPlaneType = index;
    }
    this.setData({
      showPlaneType: showPlaneType
    })
    
  },
  selectPlaneItem: function(e){
    // 排序 拥有 面板选择
    let dataSet = e.currentTarget.dataset,
      type = dataSet.type,
      index = dataSet.idx,
      id = dataSet.id;
    let filterData = this.data.filter;
    filterData[type].currentIdx = index;

    this.setData({
      showPlaneType: '',
      filter: filterData
    });
    this.restGoodsList();
  },
  restGoodsList: function(){
    // 排序 拥有 筛选改变 重新加载商品列表
    // 展现陈列时不变
    // if(this.data.isShowList) return;
    // doing
  },
  toggleShow: function(){
    // 陈列开关
    this.setData({
      isShowList: !this.data.isShowList
    })
  },
  switchGoodsType: function(){
    // 商品列表大小图切换
    let goodsType = this.data.goodsListType;
    goodsType = goodsType == 1 ? 2 : 1;
    this.setData({
      goodsListType: goodsType
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})