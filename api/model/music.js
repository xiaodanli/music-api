const db = require('../../db')

let node_uid = require('node-uid')

//插入数据
const insert = (music_name,singer_name,pic,isup) => {
    return new Promise((resolve,reject) => {
        db.query('insert into song (id,music_name,singer_name,pic,isup) values (?,?,?,?,?)',[
            node_uid(),music_name,singer_name,pic,isup
        ],(error,res) => {
            if(!error){
                resolve(res)
            }else{
                reject(error)
            }
        })
    })
}

//判断歌曲是否存在
const find = (music_name) => {
    return new Promise((resolve,reject) => {
        db.query('select * from song where music_name=?',[
            music_name
        ],(error,res) => {
            if(!error){
                resolve({...res[0]})
            }else{
                reject(error)
            }
        })
    })
}

//修改歌曲
const update = (id,music_name,singer_name) => {
    return new Promise((resolve,reject) => {
        db.query('update song set music_name=?,singer_name=? where id=?',[music_name,singer_name,id],
        (error,res) => {
            if(!error){
                resolve(res)
            }else{
                reject(error)
            }
        })
    })
}
//上架/下架歌曲
const updateIsup = (id,isup) => {
    return new Promise((resolve,reject) => {
        db.query('update song set isup=? where id=?',[isup,id],
        (error,res) => {
            if(!error){
                resolve(res)
            }else{
                reject(error)
            }
        })
    })
}
//修改歌曲图片
const updatePic = (id,pic) => {
    return new Promise((resolve,reject) => {
        db.query('update song set pic=? where id=?',[pic,id],
        (error,res) => {
            if(!error){
                resolve(res)
            }else{
                reject(error)
            }
        })
    })
}
//删除歌曲
const deleteMusic = (id) => {
    return new Promise((resolve,reject) => {
        db.query('delete from song where id=?',[id],
        (error,res) => {
            if(!error){
                resolve(res)
            }else{
                reject(error)
            }
        })
    })

}
//判断歌曲是否存在
const querymusic = () => {
    return new Promise((resolve,reject) => {
        db.query('select * from song where isup=? order by id',[
            1
        ],(error,res) => {
            if(!error){
                resolve(res)
            }else{
                reject(error)
            }
        })
    })
}

module.exports = {
    insert,
    find,
    update,
    updateIsup,
    updatePic,
    deleteMusic,
    querymusic
}