import { Pipe ,PipeTransform} from "@angular/core";
@Pipe({
    name:'filter',
    pure:false
})
export class FilterPipes implements PipeTransform{
transform(value:any,filteredstring:string) {
    
if(value.length===0||filteredstring===''){
    return value
}
const users=[];
for(const user of value){
    if(user['name']===filteredstring){
        users.push(user)
    }
}
return users;

}
}