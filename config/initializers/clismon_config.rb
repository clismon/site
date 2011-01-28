
module Clismon
  mattr_accessor :images
  @@images = 'https://s3-eu-west-1.amazonaws.com/clismon'
  
  mattr_accessor :groups
  @@groups = ['lecrou', 'doplacie', 'historietas', 'dinero', 'elotromundo',
    'enciclopedia', 'tierra', 'encargos', 'muvirecor']
end