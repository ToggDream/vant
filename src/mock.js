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
                    distance:()=>Random.integer( 1, 5 )
                },
                "storeDetail|2":[
                    {
                        //img:() =>Random.dataImage(),
                        img:'/src/assets/img/test.png',
                        price:()=>Random.integer( 1, 1000 ),
                        sale:()=>Random.integer( 1, 1000 ),
                    }
                ]
                /**/
            },
        ],
    });
}
export default useMock;