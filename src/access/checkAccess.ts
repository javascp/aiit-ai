/**
 * 检查权限
 * @param loginUser
 * @param needAccess
 */
import ACCESS_ENUM from "@/access/accessEnum";
//简单了解一下 TS 类型中的 any、void 和 never。
//如果我们无法确定变量的类型时（或者无需确认类型时），我们可以将其指定为 any 类型。
//void 类型表示没有任何类型
//never 类型表示永远不会有值的一种类型

const checkAccess = (loginUser:any,needAccess =  ACCESS_ENUM.NOT_LOGIN) =>{
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN
    //无权限
    if(needAccess === ACCESS_ENUM.NOT_LOGIN){
        return true;
    }
    //登录才能访问 user
    if(needAccess === ACCESS_ENUM.USER){
        // 只用登录就可以了
        if(loginUserAccess === ACCESS_ENUM.NOT_LOGIN){
            return false;
        }
    }
    //admin
    if(needAccess === ACCESS_ENUM.ADMIN){
        if(loginUserAccess !== ACCESS_ENUM.ADMIN){
            return false
        }
    }
    return true
};
export default checkAccess;
