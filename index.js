updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object,{key:value})
}
destructivelyUpdateObjectWithKeyAndValue(object,key,value){
