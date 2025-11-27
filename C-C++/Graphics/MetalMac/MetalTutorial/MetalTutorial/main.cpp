//
//  main.cpp
//  MetalTutorial
//
//  Created by Johnathan Burgess on 11/27/25.
//

#include <Metal/Metal.hpp>
#include <iostream>

int main(int argc, const char * argv[]){
    MTL::Device* metalDevice = MTL::CreateSystemDefaultDevice();
    
    std::cout << "Hello, World from Metal-CPP!\n";
    return 0;
}
