//
//  RCTViewManagerView.m
//  abc
//
//  Created by mac2019_17 on 24/04/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RCTViewManagerView.h"
#import <React/RCTViewManager.h>


@implementation RCTViewManagerView

RCT_EXPORT_MODULE(TestDemo)
RCT_EXPORT_VIEW_PROPERTY(str_Value, BOOL)

@synthesize str_Value;

- (UIView *)view
{
  UIView *view = [[UIView alloc]init];
  [view setBackgroundColor:[UIColor redColor]];
  
  UILabel *lbl = [[UILabel alloc]initWithFrame:CGRectMake(10, 500, 150, 50)];
  [lbl setBackgroundColor:[UIColor whiteColor]];
  lbl.text = @"texttext";
  [view addSubview:lbl];
  
  return view;
}

@end
