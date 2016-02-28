// main
get "/" => "main#index"
get "/test" => "main#test"

get "/practice" => "redirect#common"
get "/practice/cases" => "main#commonMd"
get "/practice/overall" => "main#commonMd"
get "/practice/members" => "main#commonMd"
get "/practice/list" => "main#commonMd"

get "/react" => "redirect#common"
get "/react/cat-meow" => "main#commonMd"
get "/react/get-started" => "main#commonMd"
get "/react/logs" => "main#commonMd"

get "/resource" => "main#base"
