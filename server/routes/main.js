// main
get "/" => "main#index"
get "/test" => "main#test"

get "/practice" => "redirect#common"
get "/practice/cases" => "main#commonMd"
get "/practice/overall" => "main#commonMd"
get "/practice/:type(\w+)" => "main#member"
get "/practice/:type(\w+)" => "main#member"

get "/react" => "redirect#common"
get "/react/salt" => "main#commonMd"
get "/react/get-started" => "main#commonMd"
get "/react/logs" => "main#commonMd"
get "/react/components/:cp(\w+)" => "component#base"

get "/resource" => "redirect#common"
get "/resource/source" => "main#commonMd"

// 404
get "/error" => "error#base"
