//
//  NativeViewController.m
//  abc
//
//  Created by mac2019_17 on 24/04/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeViewController.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>


@interface NativeViewController () <RCTBridgeModule>

@end

@implementation NativeViewController

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  [self strvalue];
}

-(NSString *) strvalue{
  return @"123";
}

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
