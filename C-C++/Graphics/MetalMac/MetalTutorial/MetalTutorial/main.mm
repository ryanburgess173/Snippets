//
//  main.mm
//  MetalTutorial
//
//  Created by Johnathan Burgess on 11/27/25.
//

#include "mtl_engine.hpp"

int main() {
    MTLEngine engine;
    engine.init();
    engine.run();
    engine.cleanup();
    
    return 0;
}
