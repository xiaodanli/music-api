const music = require('../model/music');
let node_uid = require('node-uid')

const addmusic = async(req,res,next) => {
    const {music_name,singer_name,pic,isup} = req.body;
    if(music_name && singer_name){
        try {
            const data = await music.find(music_name);
            if(JSON.stringify(data) == "{}"){
                let id = node_uid();
                await music.insert(id,music_name,singer_name,pic,isup)
                res.json({
                    code:1,
                    message:'添加歌曲成功',
                    id
                })
            }else{
                res.json({
                    code:2,
                    message:'该歌曲已经添加'
                })
            }
        }catch(e){
            console.log(e)
            res.json({
                name:'AddFail',
                message:'添加失败',
                code:0
            })
        }
    }else{
        res.json({
            name:'AddFail',
            message:'参数不完整',
            code:0
        })
    }
}
const musicShelf = async(req,res,next) => {
    const {id,isup} = req.body;
    if(id && isup){
        try {
            await music.updateIsup(id,isup);
            res.json({
                code:1,
                message:'歌曲上架/下架成功'
            })
                
        }catch(e){
            console.log(e)
            res.json({
                message:'歌曲上架/下架成功失败',
                code:0
            })
        }
    }else{
        res.json({
            message:'参数不完整',
            code:0
        })
    }
}

const updatemusic = async(req,res,next) => {
    const {id,music_name,singer_name} = req.body;
    if(id && music_name && singer_name){
        try {
            await music.update(id,music_name,singer_name);
            res.json({
                code:1,
                message:'修改歌曲成功'
            })
                
        }catch(e){
            console.log(e)
            res.json({
                message:'修改歌曲失败',
                code:0
            })
        }
    }else{
        res.json({
            message:'参数不完整',
            code:0
        })
    }
}

const deletemusic = async(req,res,next) => {
    const id = req.query.id;
    if(id){
        try {
            await music.deleteMusic(id);
            res.json({
                code:1,
                message:'删除歌曲成功'
            })
                
        }catch(e){
            console.log(e)
            res.json({
                message:'删除歌曲失败',
                code:0
            })
        }
    }else{
        res.json({
            message:'参数不完整',
            code:0
        })
    }
}
const queryMusic = async(req,res,next) => {
   
    try {
       const musics = await music.querymusic();
        res.json({
            code:1,
            message:'查询歌曲列表成功',
            data:musics
        })
            
    }catch(e){
        console.log(e)
        res.json({
            message:'查询歌曲列表失败',
            code:0
        })
    }
}
module.exports = {
    addmusic,
    musicShelf,
    updatemusic,
    deletemusic,
    queryMusic
}