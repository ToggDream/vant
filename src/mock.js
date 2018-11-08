//引入mockjs
import Mock from "mockjs"
//使用mockjs模拟数据
let useMock = (isOpenMock) =>{
    let Random = Mock.Random;
    //最新评论
    Mock.mock('/getStore',{
        "store|10":[
            {
                id:()=>Random.integer( 1, 100 ),
                storeName:()=>Random.ctitle(2,4),
                score:()=>Random.integer( 1, 5 ),
                address:{
                    name:()=>Random.ctitle(2,4),
                    distance:()=>Random.integer( 1, 5 ),
                },
                "storeDetail|2":[
                    {
                        //img:() =>Random.dataImage(),
                        img:'/src/assets/img/test.png',
                        price:()=>Random.integer( 1, 1000 ),
                        sale:()=>Random.integer( 1, 1000 ),
                        name:()=>Random.ctitle(6,10)
                    }
                ]
                /**/
            },
        ],
    });
  Mock.mock('/getTestList',{
    "testList":[
      {
        label: () => Random.ctitle(6, 10),
        content: () => Random.ctitle(20, 40),
        id:1,
        cate:'科技',
        img:() => Random.dataImage('380x250'),
      },
      {
        label: () => Random.ctitle(6, 10),
        content: () => Random.ctitle(20, 40),
        id:2,
        cate:'汽车',
        img:() => Random.dataImage('200x100'),
      },
      {
        label: () => Random.ctitle(6, 10),
        content: () => Random.ctitle(20, 40),
        id:3,
        cate:'财经',
        img:() => Random.dataImage('200x100'),
      },
      {
        label: () => Random.ctitle(6, 10),
        content: () => Random.ctitle(20, 40),
        id:4,
        cate:'时尚',
        img:() => Random.dataImage('200x100'),
      },
      {
        label: () => Random.ctitle(6, 10),
        content: () => Random.ctitle(20, 40),
        id:5,
        cate:'军事',
        img:() => Random.dataImage('200x100'),
      }
    ]
  })
}
export default useMock;